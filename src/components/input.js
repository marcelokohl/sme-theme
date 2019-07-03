import React from "react";
import InputMask from 'react-input-mask'; //https://www.npmjs.com/package/react-input-mask
import { Template, Image, Button, Text } from "../../../../_temp/sme-theme/src/index.js"

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileSrc : this.props.imageSrc,
      fileName : ''
    }
  }
  componentDidMount() {
    if (this.props.focus) {
      this.refs.field.focus();
    }
  }
  render() {
    const {
      children,
      type,
      mask,
      options,
      className,
      imageSrc,
      imageClass,
      helpText,
      errorText,
      focus
    } = this.props;

    let c = "Input-"+ type + " " + (className?" "+className:'');
    let html = [];

    if (type == 'image') {
      html.push (
        <Template>
          <Image className={imageClass} src={this.state.fileSrc} />
          <Button>Editar</Button>
          <input ref="field" onChange={e =>{this.setState({fileSrc:URL.createObjectURL(e.target.files[0])});this.props.onChange(e)}} type="file" accept="image/*"/>
        </Template>
      )
    }
    else if (type == 'file') {
      html.push (
        <Template>
          <Text>{this.state.fileName}</Text>
          <input ref="field" onChange={e =>{this.setState({fileName:e.target.files[0].name});this.props.onChange(e)}} type="file" accept="*"/>
          <Button>Upload</Button>
        </Template>
      )
    }
    else if (mask) {
      html.push (
        <InputMask ref="field" mask={mask} onChange={e => this.props.onChange(e)} value={this.props.value} type={this.props.type} />
      );
    }
    else if (type == 'switch') {
      html.push (
        <Template>
          <input ref="field" type="checkbox"/>
          <span></span>
        </Template>
      )
    }
    else if (type == 'select') {
      let htmlOptions = []
      if (options.length) {
        for (var i = 0; i < options.length; i++) {
          htmlOptions.push(<option value={options[i].value} key={i}>{options[i].label}</option>);
        }
      }
      html.push (
        <Template>
          <select ref="field" name={this.props.name} onChange={e => this.props.onChange(e)} value={this.props.value}>
            <option /> {/* @Kohl eu adicionei esse option. (quando seleciona a cidade Brasília, o input nao pega o value do select, talvez pq só fica uma única opção pra selecionar). */ }
            {htmlOptions}
          </select>
        </Template>
      )
    }
    else {
      html.push (
        <Template>
          <input key={'1'} ref="field" type={type} onChange={e => this.props.onChange(e)} value={this.props.value} />
        </Template>
      );
    }

    return (
      <div className={c}>
        <Text tag="label">{children}</Text>
        {html}
        <Template condition={helpText != ''}>
          <Text className="help">{helpText}</Text>
        </Template>
        <Template condition={errorText != ''}>
          <Text className="error">{errorText}</Text>
        </Template>
      </div>
    );

  };

};

Input.defaultProps = {
  type: 'text',
  focus: false,
  children: '',
  // value:'',
  options:[],
  className: '',
  imageSrc: '',
  mask: '',
  helpText: '',
  imageClass: '',
  errorText: '',
  onChange: () => {}
};

export default Input;

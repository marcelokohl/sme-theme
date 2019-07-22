import React from "react";
// import InputMask from 'react-input-mask'; //https://www.npmjs.com/package/react-input-mask
import { Template, Image, Button, Text } from "../index.js"

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileSrc : this.props.imageSrc,
      fileName : ''
    }
  }
  onInputChange(e) {
    if (this.props.onChange) {
      this.props.onChange(e)
    }
  }
  onTextareaChange(e) {
    if (this.props.onChange) {
      this.props.onChange(e)
    }
    // e.target.style.height = 'auto'
    // e.target.style.height = e.target.scrollHeight + 'px'
  }
  componentDidMount() {
    if (this.props.focus) {
      this.refs.field.focus();
    }
  }
  genKey() {
    // return Math.random()
    return 1;
    // return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
  }
  render() {
    const {
      id,
      children,
      type,
      mask,
      options,
      className,
      name,
      imageSrc,
      imageClass,
      buttonClass,
      buttonText,
      helpText,
      errorText,
      focus,
      plugin,
      disabled
    } = this.props;

    let c = "Input-"+ type + " " + (className?" "+className:'');
    if (disabled) {
      c += ' disabled'
    }
    let html = [];
    if (type == 'image') {
      html.push (
        <Template key={this.genKey()}>
          <Template condition={imageSrc}>
            <Image className={imageClass} src={this.state.fileSrc || imageSrc} />
          </Template>
          <Button className={buttonClass}>Editar</Button>
          <input disabled={disabled} ref="field" onChange={e =>{this.setState({fileSrc:URL.createObjectURL(e.target.files[0])});this.onInputChange(e)}} type="file" accept="image/*"/>
        </Template>
      )
    }
    else if (type == 'file') {
      html.push (
        <Template key={this.genKey()}>
          <Text>{this.state.fileName}</Text>
          <input disabled={disabled} ref="field" onChange={e =>{this.setState({fileName:e.target.files[0].name});this.onInputChange(e)}} type="file" accept="*"/>
          <Button className={buttonClass}>Upload</Button>
        </Template>
      )
    }
    else if (mask) {
      let InputMask = plugin
      html.push (
        <InputMask disabled={disabled} key={this.genKey()} ref="field" mask={mask} onChange={e => this.onInputChange(e)} value={this.props.value} type={this.props.type} />
      );
    }
    else if (type == 'switch') {
      html.push (
        <Template key={this.genKey()}>
          <input checked={this.props.value} onChange={e => this.onInputChange(e)} disabled={disabled} ref="field" type="checkbox"/>
          <span></span>
        </Template>
      )
    }
    else if (type == 'textarea') {
      html.push (
        <Template key={this.genKey()}>
          <textarea onChange={e => this.onTextareaChange(e)} value={this.props.value}></textarea>
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
        <Template key={this.genKey()}>
          <select disabled={disabled} ref="field" name={this.props.name} onChange={e => this.onInputChange(e)} value={this.props.value}>
            <option>--select--</option> {/* @Kohl eu adicionei esse option. (quando seleciona a cidade Brasília, o input nao pega o value do select, talvez pq só fica uma única opção pra selecionar). */ }
            {htmlOptions}
          </select>
        </Template>
      )
    }
    else if(type === 'checkbox' || type === 'radio') {
      html.push (
        <Template key={this.genKey()}>
          <input value={this.props.value} checked={this.props.checked} name={name} disabled={disabled} id={id} ref="field" type={type} onChange={e => this.onInputChange(e)} />
        </Template>
      );
    }
    else {
      html.push (
        <Template key={this.genKey()}>
          <input name={name} disabled={disabled} id={id} ref="field" type={type} onChange={e => this.onInputChange(e)} value={this.props.value} />
        </Template>
      );
    }

    return (
      <div className={c}>
        <label className="Text" htmlFor={id}>{children}</label>
        <Template condition={type != 'label'}>
          {html}
        </Template>
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
  disabled: false,
  children: '',
  // value:'',
  options:[],
  className: '',
  imageSrc: '',
  mask: '',
  helpText: '',
  imageClass: '',
  errorText: '',
  onChange: false
};

export default Input;

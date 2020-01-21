import React, { useState } from "react"; // Khol Importei useState para usar state em componente funcional
import InputMask from 'react-input-mask'; //https://www.npmjs.com/package/react-input-mask
import { Template, Image, Button, Text } from "../index.js"

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

<<<<<<< HEAD
    let c = "Input-"+ type + " " + (className?" "+className:'');
    let html = [];
=======
const Input = props => {
  const { children, type, className, srcImg, mask, list } = props;
  let c = "Input-"+ type + " " + (className?" "+className:'');
  const [srcImage, setSrcImage] = useState(srcImg) // Kohl Aqui seto o src da imagem q vem do form em srcImage
>>>>>>> origin/development

    if (type == 'image') {
      html.push (
        <Template>
          <Template condition={this.state.fileSrc}>
            <Image className={imageClass} src={this.state.fileSrc} />
          </Template>
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
        <select ref="field" name={this.props.name} onChange={e => this.props.onChange(e)} value={this.props.value}>
          <option>--Select--</option> {/* @Kohl eu adicionei esse option. (quando seleciona a cidade Brasília, o input nao pega o value do select, talvez pq só fica uma única opção pra selecionar). */ }
          {htmlOptions}
        </select>
      )
    }
    else if (type == 'textarea') {
      html.push (
        <textarea>
        </textarea>
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
<<<<<<< HEAD
        <Text tag="label">{children}</Text>
        {html}
        <Template condition={helpText != ''}>
          <Text className="help">{helpText}</Text>
        </Template>
        <Template condition={errorText != ''}>
          <Text className="error">{errorText}</Text>
        </Template>
=======
        <div className="Image rounded image-sm border mx-auto">
          <img id="myImg" src={srcImage ? srcImage : srcImg} />
        </div>
        <div className="Text mt-1">Editar</div>
        <input onChange={(e)=>{setSrcImage(URL.createObjectURL(e.target.files[0]));props.onChange(e);}} className="form-file-image" type="file" name="myImage" accept="image/*"/>
>>>>>>> origin/development
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

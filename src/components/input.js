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
  componentDidMount() {
    if (this.props.focus) {
      this.refs.field.focus();
    }
  }
  genKey() {
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
      imageSrc,
      imageClass,
      buttonClass,
      buttonText,
      helpText,
      errorText,
      focus,
      plugin
    } = this.props;

    let c = "Input-"+ type + " " + (className?" "+className:'');
    let html = [];
    if (type == 'image') {
      html.push (
        <Template key={this.genKey()}>
          <Template condition={imageSrc}>
            <Image className={imageClass} src={this.state.fileSrc || imageSrc} />
          </Template>
          <Button className={buttonClass}>Editar</Button>
          <input ref="field" onChange={e =>{this.setState({fileSrc:URL.createObjectURL(e.target.files[0])});this.props.onChange(e)}} type="file" accept="image/*"/>
        </Template>
      )
    }
    else if (type == 'file') {
      html.push (
        <Template key={this.genKey()}>
          <Text>{this.state.fileName}</Text>
          <input ref="field" onChange={e =>{this.setState({fileName:e.target.files[0].name});this.props.onChange(e)}} type="file" accept="*"/>
          <Button>Upload</Button>
        </Template>
      )
    }
    else if (mask) {
      let InputMask = plugin
      html.push (
        <InputMask key={this.genKey()} ref="field" mask={mask} onChange={e => this.props.onChange(e)} value={this.props.value} type={this.props.type} />
      );
    }
    else if (type == 'switch') {
      html.push (
        <Template key={this.genKey()}>
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
        <Template key={this.genKey()}>
          <select ref="field" name={this.props.name} onChange={e => this.props.onChange(e)} value={this.props.value}>
            <option>--select--</option> {/* @Kohl eu adicionei esse option. (quando seleciona a cidade Brasília, o input nao pega o value do select, talvez pq só fica uma única opção pra selecionar). */ }
            {htmlOptions}
          </select>
        </Template>
      )
    }
    else {
      html.push (
        <Template key={this.genKey()}>
          <input id={id} key={'1'} ref="field" type={type} onChange={e => this.props.onChange(e)} value={this.props.value} />
        </Template>
      );
    }

    return (
      <div className={c}>
        <label className="Text" htmlFor={id}>{children}</label>
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


/*----------*/


//
// const Campo = props => {
//   const { children, label, className, errorText } = props;
//   return (
//     <div className={className}>
//       <label>{label}</label>
//       {children}
//       <Template condition={errorText != undefined}>
//         <span className="error">{errorText}</span>
//       </Template>
//     </div>
//   );
// };
//
// const Input = props => {
//   const { children, type, className, srcImg, mask, list } = props;
//   let c = "Input-"+ type + " " + (className?" "+className:'');
//   const [srcImage, setSrcImage] = useState(srcImg) // Kohl Aqui seto o src da imagem q vem do form em srcImage
//
//   let html = [];
//
//   if (type == 'image') {
//     html.push (
//       <div className={c}>
//         <div className="Image rounded image-sm border mx-auto">
//           <img id="myImg" src={srcImage ? srcImage : srcImg} />
//         </div>
//         <div className="Text mt-1">Editar</div>
//         <input onChange={(e)=>{setSrcImage(URL.createObjectURL(e.target.files[0]));props.onChange(e);}} className="form-file-image" type="file" name="myImage" accept="image/*"/>
//       </div>
//     )
//
//   } else if (type == 'select') {
//     let html_list = []
//     if (list.length) {
//       for (var i = 0; i < list.length; i++) {
//         html_list.push(<option value={list[i].value} key={i}>{list[i].label}</option>);
//       }
//     }
//     html.push (
//       <Campo className={c} label={props.label} key={props.input} errorText={props.errorText}>
//         <select name={props.name} onChange={e => props.input.onChange(e)} value={props.input.value}>
//           <option /> {/* @Kohl eu adicionei esse option. (quando seleciona a cidade Brasília, o input nao pega o value do select, talvez pq só fica uma única opção pra selecionar). */ }
//           {html_list}
//         </select>
//       </Campo>
//     )
//
//   } else if (mask) {
//     html.push (
//       <Campo className={c} label={children} key={props.input} errorText={props.errorText}> { /* @Kohl tive q adicionar a key. (o react tava alertando q n tinha uma key.) */ }
//         <InputMask mask={mask} onChange={e => props.input.onChange(e)} value={props.input.value} type={props.type} />
//       </Campo>
//     );
//   } else {
//     html.push (
//       <Campo className={c} label={children} key={props.input} errorText={props.errorText}> { /* @kohl passei o input qui pra key tbm */ }
//         <input type={type} onChange={e => props.input.onChange(e)} value={props.input.value} />
//       </Campo>
//     );
//   }
//   return html;
// };
//
// Input.defaultProps = {
//   type: 'text',
//   list: []
// };
//
// export default Input;

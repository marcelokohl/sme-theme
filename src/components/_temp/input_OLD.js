import React from "react";
import InputMask from 'react-input-mask'; //https://www.npmjs.com/package/react-input-mask
import { Template, Button, Text } from "../../../../_temp/sme-theme/src/index.js"

const InputWrap = props => {
  const { children, labelText, className, errorText, helpText } = props;
  return (
    <div className={className}>
      <Text>{labelText}</Text>
      {children}
      <Template condition={helpText != undefined}>
        <Text className="help">{helpText}</Text>
      </Template>
      <Template condition={errorText != undefined}>
        <Text className="error">{errorText}</Text>
      </Template>
    </div>
  );
};

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileSrc : this.props.src
    }
  }

  render() {
    const { children, type, className, src, mask, list, msg, imageClass, label } = this.props;
    let c = "Input-"+ type + " " + (className?" "+className:'');

    let html = [];

    if (type == 'image') {
      html.push (
        <InputWrap className={c} labelText={this.props.children} key={this.props.input} errorText={this.props.errorText}>
          <div className={imageClass}>
            <img id="myImg" src={src} />
          </div>
          <Button>Editar</Button>
          <input onChange={(event)=>{document.getElementById('myImg').src = URL.createObjectURL(event.target.files[0])}} className="form-file-image" type="file" name="myImage" accept="image/*"/>
        </InputWrap>
      )
    }
    if (type == 'file') {
      html.push (
        <InputWrap className={c} label={this.props.label} key={this.props.input} msg={msg}>
          <div className={imageClass}>
            <img id="myImg" src={src} />
          </div>
          <Button>Editar</Button>
          <input onChange={(event)=>{document.getElementById('myImg').src = URL.createObjectURL(event.target.files[0])}} className="form-file-image" type="file" name="myImage" accept="image/*"/>
        </InputWrap>
      )
    }
    else if (type == 'switch') {
      html.push (
        <InputWrap className={c} label={children} key={this.props.input} msg={msg}>
          <input type="checkbox"/>
          <span></span>
        </InputWrap>
      )
    }
    else if (type == 'select') {
      let html_list = []
      if (list.length) {
        for (var i = 0; i < list.length; i++) {
          html_list.push(<option value={list[i].value} key={i}>{list[i].label}</option>);
        }
      }
      html.push (
        <InputWrap className={c} label={this.props.label} key={this.props.input}>
          <select name={this.props.name} onChange={e => this.props.input.onChange(e)} value={this.props.input.value}>
            <option /> {/* @Kohl eu adicionei esse option. (quando seleciona a cidade Brasília, o input nao pega o value do select, talvez pq só fica uma única opção pra selecionar). */ }
            {html_list}
          </select>
        </InputWrap>
      )

    } else if (mask) {
      html.push (
        <InputWrap className={c} label={children} key={this.props.input}> { /* @Kohl tive q adicionar a key. (o react tava alertando q n tinha uma key.) */ }
          <InputMask mask={mask} onChange={e => this.props.input.onChange(e)} value={this.props.input.value} type={this.props.type} />
        </InputWrap>
      );
    } else {
      html.push (
        <InputWrap className={c} label={children} key={this.props.input} msg={msg}> { /* @kohl passei o input qui pra key tbm */ }
          <input type={type} onChange={e => this.props.input.onChange(e)} value={this.props.input.value} />
        </InputWrap>
      );
    }
    return html;
  };
};

Input.defaultProps = {
  type: 'text',
  list: [],
  input: {
    onChange: function functionName() {

    }
  },
};

export default Input;

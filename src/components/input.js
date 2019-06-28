import React from "react";
import InputMask from 'react-input-mask'; //https://www.npmjs.com/package/react-input-mask
import { Template } from "../../../../_temp/sme-theme/src/index.js"

require('./input.scss');



const Campo = props => {
  const { children, label, className, errorText } = props;
  return (
    <div className={className}>
      <label>{label}</label>
      {children}
      <Template condition={errorText != undefined}>
        <span className="error">{errorText}</span>
      </Template>
    </div>
  );
};

const Input = props => {
  const { children, type, className, src, mask, list } = props;
  let c = "Input-"+ type + " " + (className?" "+className:'');

  let html = [];

  if (type == 'image') {
    html.push (
      <div className={c}>
        <div className="Image rounded image-sm border mx-auto">
          <img id="myImg" src={src} />
        </div>
        <div className="Text mt-1">Editar</div>
        <input onChange={(event)=>{document.getElementById('myImg').src = URL.createObjectURL(event.target.files[0])}} className="form-file-image" type="file" name="myImage" accept="image/*"/>
      </div>
    )

  } else if (type == 'select') {
    let html_list = []
    if (list.length) {
      for (var i = 0; i < list.length; i++) {
        html_list.push(<option value={list[i].value} key={i}>{list[i].label}</option>);
      }
    }
    html.push (
      <Campo className={c} label={props.label} key={props.input}>
        <select name={props.name} onChange={e => props.input.onChange(e)} value={props.input.value}>
          <option /> {/* @Kohl eu adicionei esse option. (quando seleciona a cidade Brasília, o input nao pega o value do select, talvez pq só fica uma única opção pra selecionar). */ }
          {html_list}
        </select>
      </Campo>
    )

  } else if (mask) {
    html.push (
      <Campo className={c} label={children} key={props.input}> { /* @Kohl tive q adicionar a key. (o react tava alertando q n tinha uma key.) */ }
        <InputMask mask={mask} onChange={e => props.input.onChange(e)} value={props.input.value} type={props.type} />
      </Campo>
    );
  } else {
    html.push (
      <Campo className={c} label={children} key={props.input}> { /* @kohl passei o input qui pra key tbm */ }
        <input type={type} onChange={e => props.input.onChange(e)} value={props.input.value} />
      </Campo>
    );
  }
  return html;
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

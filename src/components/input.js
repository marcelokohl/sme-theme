import React from "react";
import InputMask from 'react-input-mask'; //https://www.npmjs.com/package/react-input-mask
import { Template } from "../../../../_temp/sme-theme/src/index.js"

const Campo = props => {
  const { children, label, className, errorText, msg } = props;
  return (
    <div className={className}>
      <label>{label}</label>
      {children}
      <Template condition={msg != undefined}>
        <span className="muted">{msg}</span>
      </Template>
      <Template condition={errorText != undefined}>
        <span className="error">{errorText}</span>
      </Template>
    </div>
  );
};

const Input = props => {
  const { children, type, className, src, mask, list, msg, imageClass } = props;
  let c = "Input-"+ type + " " + (className?" "+className:'');

  let html = [];

  if (type == 'image') {
    html.push (
      <Campo className={c} label={props.label} key={props.input} msg={msg}>
        <div className={imageClass}>
          <img id="myImg" src={src} />
        </div>
        <div className="Button">Editar</div>
        <input onChange={(event)=>{document.getElementById('myImg').src = URL.createObjectURL(event.target.files[0])}} className="form-file-image" type="file" name="myImage" accept="image/*"/>
      </Campo>
    )
  }
  else if (type == 'switch') {
    html.push (
      <Campo className={c} label={children} key={props.input} msg={msg}>
        <input type="checkbox"/>
        <span></span>
      </Campo>
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
      <Campo className={c} label={children} key={props.input} msg={msg}> { /* @kohl passei o input qui pra key tbm */ }
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

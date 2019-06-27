## SME Theme

### Installation

`npm i sme-theme`

### How To Use

...
Components
`import Theme, { Text, Button } from "sme-theme"`

CSS
`require('../node_modules/sme-theme/build/theme.css');`


`<Text />`
`<Button />`

### Props

| _Prop_ |     _Description_     | _Default value_ |
| ------ | :-------------------: | :-------------: |
| color  | Sets background color |      blue       |

### Example

counter

`<Counter step={-1} max={365} ref="counterDay">2</Counter>D &nbsp;`
`<Counter step={-1} max={24} onComplete={() => {this.refs.counterDay.update();}} ref="counterHour">0</Counter>H &nbsp;`
`<Counter step={-1} max={60} onComplete={() => {this.refs.counterHour.update();}} ref="counterMin">0</Counter>M &nbsp;`
`<Counter step={-1} interval={1} max={60} active={true} onComplete={() => {this.refs.counterMin.update();}}>3</Counter>S`

```
...
```

## SME Theme

### Installation

`npm i sme-theme`

### How To Use

...
Components
`import { Text, Title, Button, etc... } from "sme-theme"`

CSS
In main scss `@import "../node_modules/sme-theme/src/theme.scss";`

Sizes:

xs, sm, md, lg, xl

`<Text className="" tag="">{children}</Text>`

`<Title className="" tag="">{children}</Title>`

`<Image className="" src=""/>`

`<Icon className="" name=""/>`

`<Button to="RouterLink" plugin={Link} href="" className="" onClick={} target="" active disabled>{children}</Button>`

`<Page name="" loading={}>{children}</Page>`

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

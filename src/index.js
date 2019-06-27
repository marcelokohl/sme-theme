import Text from "./components/text";
import Button from "./components/button";
import Switch from "./components/switch";
import Image from "./components/image";
import Icon from "./components/icon";
import Input from "./components/input";
import Bg from "./components/bg";
import Alert from "./components/alert";
import Card from "./components/card";
import Progress from "./components/progress";
import Divider from "./components/divider";
import Counter from "./components/counter";

import Container from "./layout/container";
import Page from "./layout/page";
import Cell from "./layout/cell";
import Grid from "./layout/grid";
import Table from "./layout/table";
import Modal from "./layout/modal";
import Template from "./layout/template";
import Wrap from "./layout/wrap";

import Navbar from "./modules/navbar";
import Menu from "./modules/menu";
import Titlebar from "./modules/titlebar";

// module.exports.Text = Text;
// module.exports.Button = Button;

require('./theme.scss');

export {
  Text,
  Button,
  Navbar,
  Menu,
  Card,
  Titlebar,
  Progress,
  Divider,
  Bg,
  Counter,
  Alert,
  Container,
  Modal,
  Template,
  Wrap,
  Page,
  Table,
  Switch,
  Image,
  Icon,
  Grid,
  Cell,
  Input,
}

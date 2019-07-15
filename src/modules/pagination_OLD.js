import React, { Component } from 'react';
import { Text, Button, Template, Container, Icon, Titlebar, Image } from "../../../../_temp/sme-theme/src/index.js"

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: this.props.total,
      current: this.props.current,
      step: 5,
      show: {
        start: false,
        end: false
      }
    }
  }
  getFirst() {
    if (this.state.current < this.state.step) {
      return 1
    } else {
      return this.state.current - 2
    }
  }
  getMiddle() {
    if (this.state.current < this.state.step) {
      return 1
    } else {
      return this.state.current - 2
    }
  }
  componentDidUpdate() {
    // console.log(this.state.show.start);
    this.props.onChange(this.state.current)
  }
  prevPage() {
    if (this.state.current <= 1) {
      return
    }
    this.setState({current: this.state.current-1})
  }
  nextPage() {
    if (this.state.current >= this.state.total) {
      return
    }
    this.setState({current: this.state.current+1})
  }
  changePage(i) {
    this.setState({current: i})
  }
  createTable() {
    let list = []
    for (let i = this.getFirst(); i <= this.state.step+4 ; i++) {
      list.push(<Button onClick={() => this.changePage(i)} className={this.state.current===i?'rounded':'rounded transparent'} key={i}>{i}</Button>)
    }
    return list
  }

  render() {
    const { children, className, page } = this.props;
    let c = "Pagination" + (className?' '+className:'');
    return (
      <div className={c}>
        {this.state.show.start}
        <Button className="rounded transparent" onClick={() => this.prevPage()}><Icon name="arrow-left"/></Button>
        {this.createTable()}
        <Button className="rounded transparent" onClick={() => this.nextPage()}><Icon name="arrow-right"/></Button>
      </div>
    );
  };
};

Pagination.defaultProps = {
  total: 3,
  current: 1,
  onChange: function functionName() {}
}

export default Pagination;



/* * * * * * * * * * * * * * * * *
 * Pagination
 * javascript page navigation
 * * * * * * * * * * * * * * * * */

var Pagination2 = {

    code: '',

    // --------------------
    // Utility
    // --------------------

    // converting initialize data
    Extend: function(data) {
        data = data || {};
        Pagination.size = data.size || 300;
        Pagination.page = data.page || 1;
        Pagination.step = data.step || 3;
    },

    // add pages by number (from [s] to [f])
    Add: function(s, f) {
        for (var i = s; i < f; i++) {
            Pagination.code += '<a>' + i + '</a>';
        }
    },

    // add last page with separator
    Last: function() {
        Pagination.code += '<i>...</i><a>' + Pagination.size + '</a>';
    },

    // add first page with separator
    First: function() {
        Pagination.code += '<a>1</a><i>...</i>';
    },



    // --------------------
    // Handlers
    // --------------------

    // change page
    Click: function() {
        Pagination.page = +this.innerHTML;
        Pagination.Start();
    },

    // previous page
    Prev: function() {
        Pagination.page--;
        if (Pagination.page < 1) {
            Pagination.page = 1;
        }
        Pagination.Start();
    },

    // next page
    Next: function() {
        Pagination.page++;
        if (Pagination.page > Pagination.size) {
            Pagination.page = Pagination.size;
        }
        Pagination.Start();
    },



    // --------------------
    // Script
    // --------------------

    // binding pages
    Bind: function() {
        var a = Pagination.e.getElementsByTagName('a');
        for (var i = 0; i < a.length; i++) {
            if (+a[i].innerHTML === Pagination.page) a[i].className = 'current';
            a[i].addEventListener('click', Pagination.Click, false);
        }
    },

    // write pagination
    Finish: function() {
        Pagination.e.innerHTML = Pagination.code;
        Pagination.code = '';
        Pagination.Bind();
    },

    // find pagination type
    Start: function() {
        if (Pagination.size < Pagination.step * 2 + 6) {
            Pagination.Add(1, Pagination.size + 1);
        }
        else if (Pagination.page < Pagination.step * 2 + 1) {
            Pagination.Add(1, Pagination.step * 2 + 4);
            Pagination.Last();
        }
        else if (Pagination.page > Pagination.size - Pagination.step * 2) {
            Pagination.First();
            Pagination.Add(Pagination.size - Pagination.step * 2 - 2, Pagination.size + 1);
        }
        else {
            Pagination.First();
            Pagination.Add(Pagination.page - Pagination.step, Pagination.page + Pagination.step + 1);
            Pagination.Last();
        }
        Pagination.Finish();
    },



    // --------------------
    // Initialization
    // --------------------

    // binding buttons
    Buttons: function(e) {
        var nav = e.getElementsByTagName('a');
        nav[0].addEventListener('click', Pagination.Prev, false);
        nav[1].addEventListener('click', Pagination.Next, false);
    },

    // create skeleton
    Create: function(e) {

        var html = [
            '<a>&#9668;</a>', // previous button
            '<span></span>',  // pagination container
            '<a>&#9658;</a>'  // next button
        ];

        e.innerHTML = html.join('');
        Pagination.e = e.getElementsByTagName('span')[0];
        Pagination.Buttons(e);
    },

    // init
    Init: function(e, data) {
        Pagination.Extend(data);
        Pagination.Create(e);
        Pagination.Start();
    }
};



/* * * * * * * * * * * * * * * * *
* Initialization
* * * * * * * * * * * * * * * * */

var init = function() {
    Pagination.Init(document.getElementById('pagination'), {
        size: 30, // pages size
        page: 1,  // selected page
        step: 3   // pages before and after current
    });
};

// document.addEventListener('DOMContentLoaded', init, false);

import React, { Component } from 'react';
import axios from 'axios';

export class Home extends Component {
  static displayName = Home.name;
    constructor(props) {
        super(props);
        this.state = {
            data:[]
        }
    }
    
    componentWillMount() {
        console.log(1);
        axios.get("https://localhost:5001/api/apimocker/get").then((res) => {
            console.log(res);
            this.setState({
                data: res.data
            });
        }).catch(function(error) {
            console.log(error);
        });
    }

   render() {
       const elements = [];
       this.state.data.map((item) => {
           elements.push(
               <tr key={item.name}>
                   <td>{item.name}</td>
                   <td>{item.description}</td>
                   <td>{item.apiMethod}</td>
                   <td>{item.requestFormats}</td>
                   <td>{item.responseFormats}</td>
                </tr>
           );
       });

      return (
      <div>
        <h1>Hello, world!</h1>
        <p>Welcome to your new single-page application, built with:</p>
        <ul>
          <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
          <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
          <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
        </ul>
        <p>To help you get started, we have also set up:</p>
        <ul>
          <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>
          <li><strong>Development server integration</strong>. In development mode, the development server from <code>create-react-app</code> runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>
          <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration produces minified, efficiently bundled JavaScript files.</li>
        </ul>
            <p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>
            <table>
                  <thead>
                      <tr>
                          <th width="260">接口名称</th>
                          <th width="200">接口描述</th>
                          <th width="100">接口方法</th>
                          <th width="300">请求参数</th>
                          <th width="300">返回内容</th>
                      </tr>
                  </thead>
                <tbody>
                      {elements}
                </tbody>
            </table>
      </div>
    );
  }
}

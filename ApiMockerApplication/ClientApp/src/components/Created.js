import React, { Component } from 'react';
import axios from 'axios';

export class Created extends Component {
    static displayName = Created.name;

    constructor(props) {
        super(props);
        this.state = {
            currentCount: 0,
            apiName: '',
            apiDescription: '',
            apiMethod: '',
            apiRequestFormat: '',
            apiResponseFormat: ''
        };
        this.incrementCounter = this.incrementCounter.bind(this);
        this.add = this.add.bind(this);
        this.setName = this.setName.bind(this);
        this.changeValue = this.changeValue.bind(this);
    }

    incrementCounter() {
        this.setState({
            currentCount: this.state.currentCount + 1
        });
    }

    add() {
        axios.get("https://localhost:5001/WeatherForecast").then(function(response) {
            console.log(response);
        });

        const request = {
            name: this.state.apiName,
            description: this.state.apiDescription,
            apiMethod: this.state.apiMethod,
            requestFormat: this.state.apiRequestFormat,
            responseFormat: this.state.apiResponseFormat
        };
        axios.post('https://localhost:5001/api/apimocker/add', request)
            .then(res => {
                console.log(res);
            });
    }

    setName(event) {
        this.setState({
            apiName: event.target.value
        });
    }

    changeValue(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div>
                <h1>添加接口信息</h1>
                <div>
                    <label>接口名称：</label>
                    <input type="text" name="apiName" placeholder="示例：api/messages/get" value={this.state.apiName} onChange={this.changeValue} />
                </div>
                <div>
                    <label>接口描述：</label>
                    <input type="text" name="apiDescription" placeholder="请输入该接口的描述信息" value={this.state.apiDescription} onChange={this.changeValue} />
                </div>
                <div>
                    <label>接口方法：</label>
                    <input type="text" name="apiMethod" placeholder="填写GET/POST/PUT/DELETE中的任意一个" value={this.state.apiMethod} onChange={this.changeValue} />
                </div>
                <div>
                    <label>请求参数：</label>
                    <table>
                        <tbody>
                        <tr>
                            <th>字段名</th>
                            <th>字段类型</th>
                            <th>字段说明</th>
                        </tr>
                        <tr>
                            <td><input /></td>
                            <td><input /></td>
                            <td><input /></td>
                        </tr>
                        <tr>
                            <td><input /></td>
                            <td><input /></td>
                            <td><input /></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <label>返回内容：</label>
                    <table>
                        <tbody>
                        <tr>
                            <th>字段名</th>
                            <th>字段类型</th>
                            <th>字段说明</th>
                        </tr>
                        <tr>
                            <td><input /></td>
                            <td><input /></td>
                            <td><input /></td>
                        </tr>
                        <tr>
                            <td><input /></td>
                            <td><input /></td>
                            <td><input /></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <button className="btn btn-primary" onClick={this.add}>添加</button>
            </div>
        );
    }
}

import React, { Component } from 'react';
import axios from 'axios';

let i = 1,j = 1;

export class Created extends Component {
    static displayName = Created.name;

    constructor(props) {
        super(props);
        this.state = {
            apiName: '',
            apiDescription: '',
            apiMethod: '',
            apiRequestFormat: '',
            apiResponseFormat: '',
            requestData: [
                {
                    'id': 'req0',
                    'fieldName': '',
                    'fieldType': '',
                    'fieldDesc': ''
                }
            ],
            responseData: [
                {
                    'id': 'res0',
                    'fieldName': '',
                    'fieldType': '',
                    'fieldDesc': ''
                }
            ]
        };

        this.setName = this.setName.bind(this);
        this.changeValue = this.changeValue.bind(this);
        this.addRequestHtml = this.addRequestHtml.bind(this);
        this.addResponseHtml = this.addResponseHtml.bind(this);
        this.deleteRequestHtml = this.deleteRequestHtml.bind(this);
        this.deleteResponseHtml = this.deleteResponseHtml.bind(this);
        this.handleRequestData = this.handleRequestData.bind(this);
        this.handleResponseData = this.handleResponseData.bind(this);
        this.submit = this.submit.bind(this);
    }

    add() {
        axios.get("https://localhost:5001/WeatherForecast").then(function(response) {
            console.log(response);
        });

        const request = {
            name: this.state.apiName,
            description: this.state.apiDescription,
            apiMethod: this.state.apiMethod,
            requestFormat: this.state.requestData,
            responseFormat: this.state.responseData
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

    handleRequestData(event) {
        let list = this.state.requestData;
        let id = event.currentTarget.parentNode.parentNode.getAttribute('id');
        let getList = list.filter(function(t) {
            return t.id === id;
        });
        let index = list.findIndex(t => t.id === id);
        getList[0][event.target.name] = event.target.value;

        list[index] = getList[0];
        this.setState({
            requestData: list
        });
    }

    handleResponseData(event) {
        let list = this.state.responseData;
        let id = event.currentTarget.parentNode.parentNode.getAttribute('id');
        let getList = list.filter(function (t) {
            return t.id === id;
        });
        let index = list.findIndex(t => t.id === id);
        getList[0][event.target.name] = event.target.value;

        list[index] = getList[0];
        this.setState({
            responseData: list
        });
    }

    addRequestHtml() {
        let id = 'req' + i;
        i++;
        let list = this.state.requestData;
        list.push({ 'id': id, 'fieldName': '', 'fieldType': '', 'fieldDesc': '' });
        this.setState({ requestData: list });
    }

    addResponseHtml() {
        let id = 'res' + j;
        j++;
        let list = this.state.responseData;
        list.push({ 'id': id, 'fieldName': '', 'fieldType': '', 'fieldDesc': '' });
        this.setState({ responseData: list });
    }

    deleteRequestHtml(event) {
        const id = event.currentTarget.parentNode.parentNode.getAttribute("id");
        let list = this.state.requestData;

        let index = list.findIndex(t => t.id === id);
        list.splice(index, 1);
        this.setState({ requestData: list });
    }

    deleteResponseHtml(event) {
        const id = event.currentTarget.parentNode.parentNode.getAttribute("id");
        let list = this.state.responseData;

        let index = list.findIndex(t => t.id === id);
        list.splice(index, 1);
        this.setState({ responseData: list });
    }

    submit() {
        console.log(this.state.requestData);
        console.log(this.state.responseData);

        let request = {
            name: this.state.apiName,
            description: this.state.apiDescription,
            apiMethod: this.state.apiMethod,
            requestFormats: this.state.requestData,
            responseFormats: this.state.responseData
        };
        axios.post('https://localhost:5001/api/apimocker/add', request)
            .then(res => {
                console.log(res);
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
                    <table id="requestContent">
                        <tbody>
                        <tr>
                            <th>字段名</th>
                            <th>字段类型</th>
                            <th>字段说明</th>
                        </tr>
                            {this.state.requestData.map((data) => {
                            return <tr key={data.id} id={data.id}>
                                       <td><input name="fieldName" onChange={this.handleRequestData}/></td>
                                       <td><input name="fieldType" onChange={this.handleRequestData}/></td>
                                       <td><input name="fieldDesc" onChange={this.handleRequestData}/></td>
                                <td><input type="button" value="删除" onClick={this.deleteRequestHtml} /></td>
                                   </tr>;
                        })}
                        </tbody>
                    </table>
                    <button className="btn btn-primary" onClick={this.addRequestHtml}>添加</button>
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
                        {this.state.responseData.map((data) => {
                            return <tr key={data.id} id={data.id}>
                               <td><input name="fieldName" onChange={this.handleResponseData} /></td>
                                <td><input name="fieldType" onChange={this.handleResponseData} /></td>
                                <td><input name="fieldDesc" onChange={this.handleResponseData} /></td>
                               <td><input type="button" value="删除" onClick={this.deleteResponseHtml} /></td>
                            </tr>;
                        })}
                        </tbody>
                    </table>
                    <button className="btn btn-primary" onClick={this.addResponseHtml}>添加</button>
                </div>
                <button className="btn btn-primary" onClick={this.submit}>提交</button>
            </div>
        );
    }
}

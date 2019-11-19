import React, { Component } from 'react';

export class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
    }

    componentWillMount() {
        this.state.data = this.props.location.state;
        console.log(this.state.data);
    }

    render() {
        return (
            <div>
                <h2>数据详情</h2>
                <div>
                    <label>接口名称：</label>
                    <label>{this.state.data.name}</label>
                </div>
                <div>
                    <label>接口描述：</label>
                    <label>{this.state.data.description}</label>
                </div>
                <div>
                    <label>接口方法：</label>
                    <label>{this.state.data.apiMethod}</label>
                </div>
                <div>
                    <label>请求参数：</label>
                    <table className="detailstable">
                        <tbody>
                            <tr>
                                <th>字段名</th>
                                <th>字段类型</th>
                                <th>字段说明</th>
                            </tr>
                            {
                                this.state.data.requestFormats != null &&
                                JSON.parse(this.state.data.requestFormats).map((data) => {
                                    return (<tr key={data.fieldName}>
                                        <td>{data.fieldName}</td>
                                        <td>{data.fieldType}</td>
                                        <td>{data.fieldDesc}</td>
                                    </tr>);

                                }) || <tr>
                                    <td>无</td>
                                    <td>无</td>
                                    <td>无</td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
                <div>
                    <label>返回内容：</label>
                    <table className="detailstable">
                        <tbody>
                        <tr>
                            <th>字段名</th>
                            <th>字段类型</th>
                            <th>字段说明</th>
                        </tr>
                        {
                                this.state.data.responseFormats != null &&
                                JSON.parse(this.state.data.responseFormats).map((data) => {
                                    return (<tr key={data.fieldName}>
                                        <td>{data.fieldName}</td>
                                        <td>{data.fieldType}</td>
                                        <td>{data.fieldDesc}</td>
                                    </tr>);
                                }) || <tr>
                                    <td>无</td>
                                    <td>无</td>
                                    <td>无</td>
                                </tr>
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
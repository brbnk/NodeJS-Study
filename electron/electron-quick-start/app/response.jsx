import React from 'react'
import Events from './events'
import Headers from './headers'

export default class Response extends React.Component { 
    constructor(props) { 
        super(props)
        this.state = { result: {}, tab: "body" }
    };

    componentWillUnmount() { 
        Events.removeListener("result", this.handleResult.bind(this))
    }

    componentDidMount() { 
        Events.addListener("result", this.handleResult.bind(this))
    }

    handleResult(result) { 
        this.setState({ result })
    };

    handleSelectTab(e) {
        const tab = e.target.dataset.tab
        this.setState({ tab })
    };

    render() { 
        const result = this.state.result
        const tabClasses = { 
            body: this.state.tab === "body" ? "active" : null,
            errors: this.state.tab === "erros" ? "active" : null
        }

        const rawStyle = this.state.tab === "body" ? null : { display: "none" }
        const errorsStyle = this.state.tab === "errors" ? null : { display: "none" }

        return (
            <div className="response">
                <h1> Response <span id="response"> { result.response } </span></h1>
                <div className="content-container">
                    <div className="content">
                        <table id="headers">
                            <thead> 
                                <tr> 
                                    <th className="name"> Header Name </th>
                                    <th className="value"> Header Value </th>
                                </tr>
                            </thead>
                            <Headers headers={result.headers} />
                        </table>
                    </div>
                    <div className="results">
                        <ul className="nav">
                            <li className={tabClasses.body}> 
                                <a data-tab="body" onClick={this.handleSelectTab}> Body </a>
                            </li>
                            <li className={tabClasses.errors}>
                                <a data-tab="errors" href="#" onClick={ this.handleSelectError }> Errors </a>
                            </li>
                        </ul>
                        <div className="raw" id="raw" style={rawStyle}> { result.raw } </div>
                        <div className="raw" id="error" style={errorsStyle}> { result.erro } </div>
                    </div>
                </div>
            </div>   
        )
    }
}
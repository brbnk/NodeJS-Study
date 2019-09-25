import React from 'react'
import Events from './events'

const request = remote.require("request")

export default class Request extends React.Component { 
    constructor(props) { 
        super(props)
        this.state = { url: null, method: "GET" }
    };

    handleChange(e) { 
        const state = {}
        state[e.target.name] = e.target.value
        this.setState(state)
    }

    makeRequest() { 
        request(this.state, (err, res, body) => { 
            const statusCode = res ? res.statusCode : "No response"
            const result = { 
                response: `(${ statusCode })`,
                raw: body ? body : '',
                headers: res ? res.headers : [],
                error: err ? JSON.stringify(err, null, 2) : ''
            }

            Events.emit("result", result)
            new Notification(`HTTP response finished: ${ statusCode }`)
        })
    }

    render() { 
        return (
            <div className="request">
                <h1> Request </h1>
                <div className="form-row">
                    <label> URL </label>
                    <input
                        name="url"
                        type="url"
                        value={this.state.url}
                        onChange={this.handleChange} />
                </div>
                <div className="form-row">
                    <input
                        name="method"
                        type="text"
                        value={this.state.method}
                        placeholder="GET, POST, PATCH, PUT, DELETE"
                        onChange={this.handleChange} />
                </div>
                <div className="form-row"> 
                    <a className="btn" onClick={this.makeRequest}> Make Request </a>
                </div>
            </div>
        )
    }
}
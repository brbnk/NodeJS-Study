import React from 'react'

export default class Headers extends React.Component {
    render() { 
        const headers = this.props.headers || {}
        const headerRows = Object.keys(headers).map((key, i) => { 
            return (
                <tr key={i}>
                    <td className="name"> { name } </td>
                    <td className="value"> { headers[key] }</td>
                </tr>
            )
        })
        return (
            <tbody className="header-body">
                { headerRows }
            </tbody>
        )
    }
}
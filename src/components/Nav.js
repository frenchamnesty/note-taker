import React from 'react'

class Nav extends React.Component {
    
    render (){
        const { toggleNote, showNote } = this.props 

        return (
            <div className="nav-container">
                <div className="nav-logo">Anon Dump</div>
                <div className="nav-button" onClick={ () => toggleNote()} >
                    { showNote ? ' Cancel' : <span><i className="add-note material-icons">add</i></span> }
                </div>
            </div>
        )
    }
}

export default Nav 
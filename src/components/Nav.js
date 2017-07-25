import React from 'react'

class Nav extends React.Component {
    
    render (){
        const { toggleNote, showNote } = this.props 

        return (
            <div className="nav-container">
                <div className="nav-logo" >
                    <i className="anon-icon material-icons">person_outline</i>
                   <span>
                   Anon Recommends</span>
                </div>

                <div 
                    className="nav-button" 
                    onClick={ () => toggleNote()}
                >
                    { 
                        showNote ? 
                            <span><i className="add-note material-icons">clear</i></span> 
                        : 
                            <span><i className="add-note material-icons">add</i></span> 
                    }
                </div>
            </div>
        )
    }
}

export default Nav 
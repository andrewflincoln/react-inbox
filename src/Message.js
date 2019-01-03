import React from 'react'



function Message(props) {

                
                if (props.starred) {
                    return (
                        <div class="row message read">
                        <div class="col-xs-1">
                            <div class="row">
                            <div class="col-xs-2">
                                <input type="checkbox" />
                            </div>
                            <div class="col-xs-2">
                                <i class="star fa fa-star"></i>
                            </div>
                            </div>
                        </div>
                        <div class="col-xs-11">
                            <a href="#">
                            {props.subject}
                            </a>
                        </div>
                        </div>
                    )
                }
                else if (props.read) {
                    return (
                        <div className='row message read'>
                        
                        <div className="col-xs-1">
                            <div className="row">
                            <div className="col-xs-2">
                                <input type="checkbox" />
                            </div>
                            <div className="col-xs-2">
                                <i className="star fa fa-star-o"></i>
                            </div>
                            </div>
                        </div>
                        <div className="col-xs-11">
                            <a href="#">
                            {props.subject}
                            </a>
                        </div>
                        </div>
                    )
                } else {
                     return (
                        <div className='row message unread'> 
                        
                        <div className="col-xs-1">
                            <div className="row">
                            <div className="col-xs-2">
                                <input type="checkbox" />
                            </div>
                            <div className="col-xs-2">
                                <i className="star fa fa-star-o"></i>
                            </div>
                            </div>
                        </div>
                        <div className="col-xs-11">
                            <a href="#">
                            {props.subject}
                            </a>
                        </div>
                        </div>
                    )   
                }
            
}

export default Message
import React from 'react'

export default function Landing() {
        return (
            <body style={{
                backgroundColor : '#AAD5E8',
                height: '100vh'
            }}>
            <div className='wrapper' style={{
                maxWidth: '1170px',
                margin: '0 auto'
            }}>
                <h1 style={{
                    fontSize: '60px',
                    position: "relative",
                    textAlign: 'center',
                    color: 'white'
                }}>Hello</h1>

                <button style={{
                    backgroundColor: '#FFFFFF',
                    color: '#707070',
                    fontSize: '40px',
                    textAlign: 'center',
                    border: '1px solid',
                    borderRadius: '50%',
                    width: '200px',
                    height: '200px',
                    position:'relative',
                    top: '200px',
                    left: '50%',
                    marginLeft: '-100px'
                }}>
                    Click
                </button>
            </div>
            </body>
        )
}



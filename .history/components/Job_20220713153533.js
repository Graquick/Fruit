import React from 'react'
import { Card } from 'react-bootstrap'

export default function Job({ job }) {
  return (
    <>
        <Card>
            <Card.Body>
                <div className={`d-flex justify-content-between`}>
                    <div>
                        <Card.Title className={`text-3xl capitalize mb-42`}>{job.title}</Card.Title>
                    </div>
                </div>
            </Card.Body>    
        </Card>
    </>
  )
}


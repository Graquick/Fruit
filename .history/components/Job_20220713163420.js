import React, { useState } from 'react'
import { Card, Badge, Button } from 'react-bootstrap'

export default function Job({ job }) {
    const [open, setOpen] = useState
  return (
    <>
        <Card>
            <Card.Body>
                <div className={`d-flex justify-content-between`}>
                    <div>
                        <Card.Title className={`text-2xl capitalize mb-2`}>{job.name}</Card.Title>
                        <Badge variant="secondary" className={`cursor-default`}>{job.email}</Badge>
                    </div>

                    <div>{job.id}</div>
                </div>

                <Collapse in={open}>
                    <Card.Text>
                        <Button variant="primary" className={`bg-blue-600`} onClick={() => setOpen(!open)}>View Details</Button>
                    </Card.Text>
                    
                    <div>{job.body}</div>
                </Collapse>
            </Card.Body>

        </Card>
    </>
  )
}


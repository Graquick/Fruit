import React, { useState } from 'react'
import { Card, Badge, Button, Collapse } from 'react-bootstrap'

export default function Job({ job }) {
    const [open, setOpen] = useState(false);
  return (
    <>
        <Card className={`w-80`}>
            <Card.Body>
                <div className={`d-flex justify-content-between`}>
                    <div>
                        <Card.Title className={`text-2xl capitalize mb-2`}>{job.name}</Card.Title>
                        <Badge variant="secondary" className={`cursor-default`}>{job.email}</Badge>
                    </div>

                    <div>{job.id}</div>
                </div>

                <Card.Text>
                    <Button variant="primary" className={`bg-blue-600`} onClick={() => setOpen(!open)}>View Details</Button>
                </Card.Text>

                <Collapse in={open}>
                    <div className={`w-64`}>{job.body}</div>
                </Collapse>
            </Card.Body>

        </Card>
    </>
  )
}


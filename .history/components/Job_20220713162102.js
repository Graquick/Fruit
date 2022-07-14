import React from 'react'
import { Card, Badge } from 'react-bootstrap'

export default function Job({ job }) {
  return (
    <>
        <Card>
            <Card.Body>
                <div className={`d-flex justify-content-between`}>
                    <div>
                        <Card.Title className={`text-2xl capitalize mb-4`}>{job.name}</Card.Title>
                        <Badge>{job.email}</Badge>
                    </div>
                </div>
            </Card.Body>

        </Card>
    </>
  )
}


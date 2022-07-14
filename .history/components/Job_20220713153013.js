import React from 'react'
import { Card } from 'react-bootstrap'

export default function Job({ job }) {
  return (
    <>
        <Card>
            <Card.Body>
                <div className={`d-flex justify-content-between`}>
                    <Card.Title>{job.title}</Card.Title>
                </div>
            <Card.Body>    
        <Card/>
    </Card>
    </>
  )
}

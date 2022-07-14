import React from 'react'
import { Card } from 'react-bootstrap'

export default function Job({ job }) {
  return (
    <>
        <Card>
            <Card.Body>
                <div className={``}>

                </div>
            <Card.Body>    
        <Card/>
        {job.title}
    </Card>
  )
}

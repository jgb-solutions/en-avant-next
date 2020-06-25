import React from 'react'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { Image } from 'react-bootstrap'

import Colors from 'utils/colors'

export default function ArticleCard() {
  return (
    <div style={{
      boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.35)"
    }}>
      <Image style={{
        display: "block",
      }} src="/assets/images/actualite1.png"
        fluid />

      <div style={{
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 15,
        paddingRight: 15,
      }}>
        <h3 style={{
          fontSize: 18,
          fontWeight: "bold",
          textTransform: "uppercase",
          color: Colors.blue,
          marginBottom: 15
        }}>Respect du mandat de Jovenel Moïse: Kelly Bastien </h3>
        <h4 style={{
          fontSize: 13,
          color: Colors.gray,
          display: "flex",
          marginBottom: 15
        }}><FaRegCalendarAlt style={{ marginRight: 5 }} /> 25 Juin 2020</h4>
        <div style={{
          color: Colors.gray,
          fontSize: 12,
          lineHeight: 1.7
        }}>
          <p>Moins de 24 heures avoir prôné le respect scrupuleux du mandat de cinq ans du président Jovenel Moïse, le professeur Rosny Desroches est déjà dans le collimateur des leaders  politiques.</p>
          <p><a href="" style={{ color: Colors.orange, fontWeight: "bold" }}>Lire plus...</a></p>
        </div>
      </div>
    </div>
  )
}
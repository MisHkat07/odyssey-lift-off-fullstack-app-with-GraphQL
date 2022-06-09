const { gql } = require('apollo-server');

const typeDefs = gql`

type Query {
   tracksForHome:[Track!]!
}

"A track is a group of modules that teaches about a specific topic"
type Track {

   id:ID!
   title:String!
   author:Author!
   thumbnail:String
   length:Int
   modulesCount:Int
}
"Author of complete track"
type Author {
      id:ID!
      title:String!
      photo:String
}
`;

module.exports = typeDefs;
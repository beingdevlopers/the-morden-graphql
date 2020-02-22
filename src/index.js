import { GraphQLServer } from 'graphql-yoga';

//Scalar Types : String, Boolean, Int, Float, ID

//type definations (schema)
const typeDefs = `
type Query {
    add(a: Float!, b:Float!): Float!
    man: User!
    post: Post!

    employed: Boolean!
    gpa:Float
    price: Float!
    releaseYear: Int
    rating: Float
    inStock:Boolean! 
}

type User {
    id:ID!
    name: String!
    email: String!
    age: Int!
}

type Post {
    id:ID!
    title: String!
    body: String!
    published: Boolean!
}

`;

//resolvers
const resolvers = {
    Query : {
        add(parents, args) {
            if(args.a && args.b) {
                return args.a + args.b;
            } else {
                return 'No Argument.';
            }
        },
        man() {
            return {
                id: 'abc123',
                name: 'Andrew Mead.',
                email: 'andrew@mead.com',
                age: 22
            }
        },
        post() {
            return {
                id: '987654',
                title: 'First Fire',
                body: '<lorem ispam>',
                published: true,
            }
        },
        employed() {
            return true;
        },
        gpa() {
            return 2.2;
        }, 
        price() {
            return 31.7;
        }, 
        releaseYear() {
            return null;
        }, 
        rating() {
            return 1.2;
        }, 
        inStock() {
            return true;
        }
    }
};

const server = new GraphQLServer({
    typeDefs,
    resolvers
});

server.start(() => {
    console.log('Serever Is UP.');
});
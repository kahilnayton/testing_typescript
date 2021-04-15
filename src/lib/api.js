export const accessToken = "";
export const spaceId = "";
export const query = `
  query {
    productCollection {
      items {
        title
        description
      }
    }
  }
`;

// productCollection {
//   items {
//     title
//     description
//     imageCollection {
//       items {
//         url (transform:{width:200})
//       }
//     }
//   }
// }
// }

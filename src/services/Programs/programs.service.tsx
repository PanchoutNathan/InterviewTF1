import { gql, useQuery } from '@apollo/client';
import {Program} from "../../entities/Program/Program";

interface ProgramsQueryResponse {
    program: Program[];
}

const GET_POSTS = gql`
  query {
    program(offset: 1) {
      id
      name
      thumnail {
        url
      }
    }
  }
`;

export function useProgramsQuery() {
    return useQuery<ProgramsQueryResponse>(GET_POSTS);
}
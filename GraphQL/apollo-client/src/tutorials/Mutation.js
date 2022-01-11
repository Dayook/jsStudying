import { gql, useMutation } from "@apollo/client";

/**
 *
 */

const ADD_TODO = gql`
    mutation AddToDo($type: String!) {
        addTodo(type:$type){
            id
            type
        }
    }
`;

function AddTodo() {
    let input;
    const [addTodo, {data}] = useMutation(ADD_TODO);

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                addTodo({ variables: { type: input.value }});
                input.value = '';
            }}
        >
            <input ref={node => {
                input = node;
            }}/>
            <button type="submit">Add Todo</button>
        </form>
        </div>
    )
}

// useMutation 훅은 useQuery처럼 컴포넌트 렌더링 시 자동 실행 x

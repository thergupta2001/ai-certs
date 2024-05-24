import { useEffect } from "react"
import axios from "axios"

export const Tasks = () => {
    useEffect(() => {
        async function getTasks () {
            const response = await axios.get("http://localhost:8000/user/tasks");
            console.log(response)
        }

        getTasks();
    }, [])

  return (
    <div>Tasks</div>
  )
}

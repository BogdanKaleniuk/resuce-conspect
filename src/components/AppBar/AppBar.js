import { StatusFilter } from "components/StatusFilter/StatusFilter";
import { TaskCounter } from "components/TaskCounter/TaskCounter";
import { useDispatch } from "react-redux";
import { setAllComplited } from "redux/actions";
import css from "./AppBar.module.css";
import { useEffect, useState, useRef } from "react";

export const AppBar = () => {
  const dispatch = useDispatch()
  const [isOn, setIsOn] = useState(false)
  const isMounted = useRef(false)

  const toggleIsOn = () => setIsOn(prevState => !prevState)

useEffect(() => {
  if(isMounted.current) {
dispatch(setAllComplited(isOn))
return
  }
isMounted.current = true;
}, [isOn, dispatch])

  return (
    <header className={css.wrapper}>
      <section className={css.section}>
        <h2 className={css.title}>Tasks</h2>
        <TaskCounter />
      </section>
      <section className={css.section}>
        <h2 className={css.title}>Actions</h2>
        <button onClick={toggleIsOn}>
          All complited {isOn ? "OFF" : "ON"}
        </button>
      </section>
      <section className={css.section}>
        <h2 className={css.title}>Filter by status</h2>
        <StatusFilter />
      </section>
    </header>
  );
};

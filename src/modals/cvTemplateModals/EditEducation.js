import React, { useEffect } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewEducationAsync,
  deleteEducationAsync,
  getUserEducationsAsync,
  updateDescription,
  updateEndDate,
  updatePresent,
  updateStartDate,
  updateUniversity,
  updateUserEducationAsync,
} from "../../features/educationSlice";
import {FaCheck} from 'react-icons/fa'
import Spinner from "../../components/Spinner";


const EditEducation = () => {
  const type = useSelector((state) => state.user.userProfileInfo.cvTemplate);
  const userId = useSelector((state) => state.user.userData.userId);
  const userEducations = useSelector((state) => state.education.userEducation);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserEducationsAsync(userId));
  }, []);

  const handleChange = (e, id) => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case "title":
        dispatch({ value, id });
        break;
      case "university":
        dispatch(updateUniversity({ value, id }));
        break;
      case "description":
        dispatch(updateDescription({ value, id }));
        break;
      case "startDate":
        dispatch(updateStartDate({ value, id }));
        break;
      case "endDate":
        dispatch(updateEndDate({ value, id }));
        break;
      case "present":
        dispatch(updatePresent({ value, id }));
        break;
      default:
        break;
    }
  };

  const handelUpdateUserEducation = (event, id) => {
    event.preventDefault();
    const experience = userEducations.find((item) => item.id === id);
    dispatch(updateUserEducationAsync({ id, experience }));
  };
  const handleAddNewEducation = () => {
    dispatch(addNewEducationAsync(userId)).then((res) => console.log(res));
  };
  const handleDeleteEducation = (id) => {
    dispatch(deleteEducationAsync(id));
  };

  const handleTypeOne = () => {
    return (
      <>
        <span>Title</span>
        <span>University / Training</span>
        <span>
          {" "}
          <FaCalendarAlt /> period from [date] - to [date]{" "}
        </span>
        <ul>
          <li>Course 1 </li>
          <li>Course 2 </li>
        </ul>
      </>
    );
  };
  const handleTypeTwo = () => {
    return (
      <>
        {/* <span>
          <FaCalendarAlt /> 09/2012 - 04/2016
        </span>
        <span>Title</span>
        <p>
          Description : Here you can place description topics of your education
          process
        </p>
      </> */}
        {userEducations || userEducations !== undefined ? (
          userEducations.map((educ, id) => {
            return (
              <div key={id}>
                <button onClick={() => handleDeleteEducation(educ.id)}>
                 X
                </button>
                <form
                  onSubmit={(e) => handelUpdateUserEducation(e, educ.id)}
                  key={educ.id}
                >
                  <span>
                    <input
                      type="date"
                      name="startDate"
                      defaultValue={educ.startDate
                        ?.toLocaleString()
                        .slice(0, 10)}
                      onChange={(e) => handleChange(e, educ.id)}
                    />{" "}
                    -
                    <input
                      type="date"
                      name="endDate"
                      value={educ.endDate?.toLocaleString().slice(0, 10)}
                      onChange={(e) => handleChange(e, educ.id)}
                    />
                  </span>
                  <input
                    type="text"
                    name="title"
                    placeholder="Degree Title..."
                    defaultValue={educ.title}
                    onChange={(e) => handleChange(e, educ.id)}
                  />
                  <input
                    type="text"
                    name="university"
                    placeholder="University..."
                    defaultValue={educ.university}
                    onChange={(e) => handleChange(e, educ.id)}
                  />
                  <textarea
                    type="text"
                    name="description"
                    placeholder="Description of your accomplishments..."
                    defaultValue={educ.description}
                    onChange={(e) => handleChange(e, educ.id)}
                  />
                  <div>
                    <button type="sybmit"> <FaCheck/> </button>
                  </div>
                </form>
              </div>
            );
          })
        ) : (
          <Spinner />
        )}
      </>
    );
  };

  return (
    <>
      {type === "one" ? handleTypeOne() : handleTypeTwo()}
      <button onClick={handleAddNewEducation}> + </button>
    </>
  );
};

export default EditEducation;

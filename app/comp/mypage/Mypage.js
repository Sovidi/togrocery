"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "./mypage.module.scss";
import axios from "axios";
import { myContext } from "../Context";

function Mypage() {
  const {loginCk, sessData, logLd} = useContext(myContext);
  const [person, setPerson] = useState([]);


  const personLd = async () => {
    await axios.get(`/api/mypage?id=${sessData.id}&nickname=${sessData.nickname}`)
    .then(res=>{
      setPerson(res.data);
    })
  }

  const pwchange = async (e) =>{
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("id", sessData.id);
    const objData = Object.fromEntries(formData);

    // console.log(objData)
    axios.put(`/api/mypage`, objData);
  }


  useEffect(()=>{
    loginCk();
    logLd();
    personLd();
  }, [])

console.log(person);

  if(!person[0]) return <>로딩중</>

  return (
    <section className={styles.myPage}>
      <h2>마이페이지</h2>
        <div className={styles.profileBox}>
            <figure>
              <img src="../asset/profile-icon.png"></img>
            </figure>
            <div className={styles.profileInfo}>
              <p className={styles.nickName}>{person[0].id}<span></span></p>
              <p className={styles.email}>{person[0].email}</p>
            <button>로그아웃</button>
            </div>
        </div>

        <div className={styles.profileUpdate}>
          <h2>개인정보 수정</h2>
          <div className={styles.updateBox}>
              <form onSubmit={(e)=>{pwchange(e)}}>
                <p><span>현재 비밀번호</span> <input type="text" placeholder="현재 비밀번호" name="bpassword"/></p>
                <p><span>새 비밀번호</span> <input type="text" placeholder="새 비밀번호" name="repassWord"/></p>
                <p><span>비밀번호 확인</span> <input type="text" placeholder="비밀번호 확인" name="apassword"/></p>
                <div>
                <button>적용</button>
                </div>
              </form>
          </div>
        </div>
        {/* <p>회원탈퇴</p> */}
    </section>
  )
}

export default Mypage
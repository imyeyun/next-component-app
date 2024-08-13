//자식 컴포넌트 참조하기
import Personal from "@/components/personal";
import Company from "@/components/company";

const Profile = () => {
  return (
    <>
      <Personal
        name="강현서"
        email="test@test.co.kr"
        phone="010-2760-5246"
        age={50}
      >
        {/*자식*/}
        <b>사용자 기본프로필</b>
      </Personal>

      <Company
        company="엠소프트웨어"
        role="풀스택개발자"
        address="서울시 강남구"
      >
        <span>회사정보</span>
      </Company>
    </>
  );
};

export default Profile;

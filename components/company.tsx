import { NextPage } from "next";
import React from "react";
type CompanyProps = {
  company: string;
  role: string;
  address: string;
  children: React.ReactNode;
};
const company: NextPage<CompanyProps> = ({
  company,
  role,
  address,
  children,
}) => {
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-6 sm:px-6">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          회사 정보
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          소속 회사 기본 정보입니다.
        </p>
      </div>
      <div className="border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-900">회사명</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              엠소프트웨어
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-900">직군</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              Backend Developer
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-900">회사주소</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              서울시 강남구 테헤란로
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default company;

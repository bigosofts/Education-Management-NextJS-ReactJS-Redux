"use client";
import "./css/style.css";
import BarChart from './Barchart.js';
import PieChart from "./Piechart";

import { useEffect,useState } from "react";
import { selectAllData as selectStudents } from "@/apiservices/studentapiservices";
import { selectData as selectAbouts } from "@/apiservices/aboutapiservices";
import { selectData as selectActivities } from "@/apiservices/activityapiservices";
import { selectData as selectComments } from "@/apiservices/commentapiservice";
import { selectData as selectCourses } from "@/apiservices/courseapiservices";
import { selectData as selectEvents } from "@/apiservices/eventapiservices";
import { selectData as selectMenus } from "@/apiservices/menuapiservices";
import { selectData as selectnotices } from "@/apiservices/noticeapiservices";
import { selectData as selectPosts } from "@/apiservices/postapiservices";
import { selectData as selectResults } from "@/apiservices/resultapiservices";
import { selectData as selectSliders } from "@/apiservices/sliderapiservices";
import { selectAllData as selectTeachers } from "@/apiservices/teacherapiservices";
import { selectData as selectWidgets } from "@/apiservices/widgetapiservices";

function DashboardMetrics(props) {
  const [data, setData]= useState();

  useEffect(()=>{
    async function getData(){
      const res =await selectStudents(null, null);
      const res1 =await selectAbouts(null, null);
      const res2 =await selectActivities(null, null);
      const res3 =await selectComments(null, null);
      const res4 =await selectCourses(null, null);
      const res5 =await selectEvents(null, null);
      const res6 =await selectMenus(null, null);
      const res7 =await selectnotices(null, null);
      const res8 =await selectPosts(null, null);
      const res9 =await selectResults(null, null);
      const res10 =await selectSliders(null, null);
      const res11 =await selectTeachers(null, null);
      const res12 =await selectWidgets(null, null);
      
      setData({
        student: res.data.length,
        about: res1.data.length,
        activity: res2.data.length,
        comment: res3.data.length,
        course: res4.data.length,
        event: res5.data.length,
        menu: res6.data.length,
        notice: res7.data.length,
        post: res8.data.length,
        result: res9.data.length,
        slider: res10.data.length,
        teacher: res11.data.length,
        widget: res12.data.length,
      })
    }
    getData();
  },[])

  if(data){
    console.log(data)
    return (
      <div className="main-box w-full min-w-[250px] overflow-y-scroll mx-5 pb-10">
        <div className="dsh-container">
          <div class="dsh-card-row">
          
            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-pink">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">Students</p>
                      <h2 class="card-text text-amount">{data.student}</h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-user-o" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-yellow">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">Teachers</p>
                      <h2 class="card-text text-amount">{data.teacher}</h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-user" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-blue">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">Notices</p>
                      <h2 class="card-text text-amount">{data.notice}</h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-bell" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-orange">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">Events</p>
                      <h2 class="card-text text-amount">{data.event}</h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-calendar-o" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-blue">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">Results</p>
                      <h2 class="card-text text-amount">{data.result}</h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-id-card" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-orange">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">Abouts</p>
                      <h2 class="card-text text-amount">{data.about}</h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-address-book-o" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-yellow">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">Courses</p>
                      <h2 class="card-text text-amount">{data.course}</h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-heart" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-pink">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">Activities</p>
                      <h2 class="card-text text-amount">{data.activity}</h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-book" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-pink">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">Widgets</p>
                      <h2 class="card-text text-amount">{data.widget}</h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-cogs" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-yellow">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">Posts</p>
                      <h2 class="card-text text-amount">{data.post}</h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-check" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-blue">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">Comments</p>
                      <h2 class="card-text text-amount">{data.comment}</h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-comments-o" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-orange">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">Menus</p>
                      <h2 class="card-text text-amount">{data.menu}</h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-folder" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-blue">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">Sliders</p>
                      <h2 class="card-text text-amount">{data.slider}</h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-bolt" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-orange">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">Connected</p>
                      <h2 class="card-text text-amount">10</h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-rss" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-yellow">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">Emails</p>
                      <h2 class="card-text text-amount">20</h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="dsh-col-lg-3 dsh-col-md-6">
              <div class="card">
                <div class="card-body border-left-pink">
                  <div class="dsh-card-row-2">
                    <div class="dsh-col">
                      <p class="card-title text-title">Fund</p>
                      <h2 class="card-text text-amount">5000</h2>
                    </div>
                    <div class="dsh-col-auto">
                      <div class="icon-shape icon-area">
                        <i class="fa fa-money" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
        
          </div>
          <div class="dsh-card-row">
            <div class="dsh-col-chart">
              <div class="card chart">
                <BarChart />
              </div>
            </div>
            <div class="dsh-col-chart">
              <div class="card chart">
                <PieChart />
              </div>
            </div>
          </div>
        </div>  
      </div>

    );
  }else{
    return <div>Loading...</div>
  }
}

export default DashboardMetrics;
# Users Stress Testing

We test all available routes of Users endpoint (FIND, ADD, EXTEND)

Number of threads is set to 10 and loop count is set to 5, which means that for the process of stress testing we suppose we have 5 sessions and in each session 10 different users access our app.

We conclude that under these conditions, Users microservice performs as expected (all endpoints produce ``Response Code: 200`` and are marked with green colour in Apache jMeter). All details are listed in file ***users-stress_testing.jmx*** which can only be opened via Apache jMeter.

<details>
  <summary>
    Users request parameters
  </summary>
  <p>
    <img src="https://user-images.githubusercontent.com/94307935/177211930-51b3b2f3-3b18-4752-a6ee-5e278eb49dda.png">
    <img src="https://user-images.githubusercontent.com/94307935/177212016-336563ff-2ef5-4203-8a13-1edf0002a5ca.png">
    <img src="https://user-images.githubusercontent.com/94307935/177212047-08c196f3-888b-42e6-8460-e0b310a103b1.png">
  </p>
</details>
<details>
  <summary>
   Find Users request example
  </summary>
 <p>
   <img src="https://user-images.githubusercontent.com/94307935/177212140-6cea8bc7-62c8-405a-a2e2-2267ca7fe105.png">
 </p>
</details>
<details>
 <summary>
    Add Users request example
  </summary>
  <p>
    <img src="https://user-images.githubusercontent.com/94307935/177212206-5e3ca902-eb63-4a62-9ad8-8ecf8e2937a1.png">
  </p>
 </details>
 <details>
  <summary>
    Extend Users request example
  </summary>
  <p>
    <img src="https://user-images.githubusercontent.com/94307935/177212233-53e8bf5f-fe33-4a84-9f49-a729bd558311.png">
  </p>
</details>
<details>
 <summary>
    Find Users request results
  </summary>
  <p>
    <img src="https://user-images.githubusercontent.com/94307935/177212479-22ef7f3d-a69a-4423-a7b0-c343e831204d.png">
  </p>
</details>
<details>
 <summary>
    Add Users request results
  </summary>
  <p>
    <img src="https://user-images.githubusercontent.com/94307935/177212518-185c90de-7c64-41dc-bef6-d2ec4aa46cdd.png">
  </p>
</details>
<details>
 <summary>
    Extend Users request results
  </summary>
  <p>
    <img src="https://user-images.githubusercontent.com/94307935/177212560-5703501b-32c9-44c1-b7ea-6b5cd202d88f.png">
  </p>
</details>

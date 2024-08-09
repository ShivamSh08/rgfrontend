import React from 'react';

const Query = () => {
  return (
    <div>
      <h1>Enquiry Page</h1>
      
      <div class="mb-3">
        <label for="" class="form-label">Name</label>
        <input
            type="name"
            class="form-control"
            name=""
            id=""
            aria-describedby="name"
            placeholder="name"
        />
      </div>



      <div class="mb-3">
        <label for="" class="form-label">Email</label>
        <input
            type="email"
            class="form-control"
            name=""
            id=""
            aria-describedby="emailHelpId"
            placeholder="abc@mail.com"
        />
      </div>

      <div class="mb-3">
        <label for="" class="form-label">Questions</label>
        <input
            type="description"
            class="form-control"
            name=""
            id=""
            aria-describedby="questions"
            placeholder="abcd"
        />
      </div>


      <button
        type="submit"
        class="btn btn-primary"
      >
        Submit
      </button>
      
      
    </div>
  );
};

export default Query;
- Here we have 3 json files (something like we have to make 3 api calls).

- We want to get 1st response and then make the 2nd call to get the 2nd response and then make the 3rd call to get the 3rd response. This means we need to wait until we get the 1st response because we want to use the data from the 1st response to make the 2nd http call and similarly we need the data from the 2nd resposne to make the 3rd http call.

- When will we make the 2nd http call? Answer: Once we have the response data from the 1st call.

- 

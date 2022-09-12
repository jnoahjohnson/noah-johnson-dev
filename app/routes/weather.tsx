import type { ActionFunction } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { useEffect } from "react";

export const action: ActionFunction = async ({ request }) => {
  let responseText = "No data";
  const formData = await request.formData();
  const temp = formData.get("temp");
  const isWindy = formData.get("isWindy");
  const isRaining = formData.get("isRaining");
  const isSnowing = formData.get("isSnowing");

  if (typeof temp !== "string") {
    return {
      responseText: "Please enter a temperature",
    };
  }

  const currTemp = parseInt(temp);

  console.log(currTemp, isWindy, isRaining, isSnowing);

  if (currTemp >= 80) {
    if (isRaining) {
      responseText = "Put on boots and dance in the rain";
    } else {
      responseText = "Go swimming";
    }
  } else if (currTemp >= 60) {
    if (isWindy) {
      responseText = "Go kite flying";
    } else {
      responseText = "Go for a walk";
    }
  } else {
    if (isSnowing) {
      responseText = "Go Sledding";
    } else {
      responseText = "Drink hot cocoa";
    }
  }

  return {
    responseText,
  };
};

export default function WeatherPage() {
  const data = useActionData();

  useEffect(() => {
    console.log("data", data);
  }, [data]);

  return (
    <main className="max-w-2xl mx-auto text-lg py-6">
      <h1 className="text-2xl font-bold">Activity Generator!</h1>
      <h2 className="font-light text-gray-500 mb-6">
        Can't decide what to do? Generate an activity based on the weather!
      </h2>

      <Form method="post">
        <div className="flex flex-col space-y-4">
          <label>
            What is the temperature outside?
            <input
              type="number"
              name="temp"
              className="bg-gray-100 ml-2 rounded"
              required
            />
          </label>
          <label>
            Is it raining?
            <input type="checkbox" name="isRaining" className="ml-2" />
          </label>
          <label>
            Is it snowing?
            <input type="checkbox" name="isSnowing" className="ml-2" />
          </label>
          <label>
            Is it windy?
            <input type="checkbox" name="isWindy" className="ml-2" />
          </label>

          <button
            type="submit"
            className="bg-teal-600 text-white px-2 py-1 rounded shadow"
          >
            Submit
          </button>
        </div>
      </Form>
      {data && data.responseText && (
        <div className="mt-6">
          <h2 className="text-xl font-bold">Here is what you should do:</h2>
          <p className="font-light text-gray-500">{data.responseText}</p>
        </div>
      )}
    </main>
  );
}

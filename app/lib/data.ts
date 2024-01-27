import firebase from "../firebase.js";
import { Project } from "@/app/lib/definitions";
function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export async function getHeroData() {
  const db = firebase.firestore();
  const docRef = db.collection("portfolio").doc("data"); // Assuming known document ID

  try {
    const docSnap = await docRef.get();

    if (docSnap.exists) {
      const heroData = docSnap.data()?.heroData;
      return heroData;
    } else {
      console.error("Document does not exist!");
      throw new Error("Document not found");
    }
  } catch (error) {
    console.error("Error retrieving data:", error);
    throw new Error("Failed to fetch Firebase data");
  }
}
export async function getAboutData() {
  const db = firebase.firestore();
  const docRef = db.collection("portfolio").doc("data"); // Assuming known document ID

  try {
    const docSnap = await docRef.get();

    if (docSnap.exists) {
      const heroData = docSnap.data()?.aboutData;
      return heroData;
    } else {
      console.error("Document does not exist!");
      throw new Error("Document not found");
    }
  } catch (error) {
    console.error("Error retrieving data:", error);
    throw new Error("Failed to fetch Firebase data");
  }
}
export async function getSkillsData() {
  const db = firebase.firestore();
  const docRef = db.collection("portfolio").doc("data"); // Assuming known document ID

  try {
    const docSnap = await docRef.get();

    if (docSnap.exists) {
      const heroData = docSnap.data()?.skillsData;
      return heroData;
    } else {
      console.error("Document does not exist!");
      throw new Error("Document not found");
    }
  } catch (error) {
    console.error("Error retrieving data:", error);
    throw new Error("Failed to fetch Firebase data");
  }
}
export async function getToolsData() {
  const db = firebase.firestore();
  const docRef = db.collection("portfolio").doc("data"); // Assuming known document ID

  try {
    const docSnap = await docRef.get();

    if (docSnap.exists) {
      const heroData = docSnap.data()?.toolsData;
      return heroData;
    } else {
      console.error("Document does not exist!");
      throw new Error("Document not found");
    }
  } catch (error) {
    console.error("Error retrieving data:", error);
    throw new Error("Failed to fetch Firebase data");
  }
}
export async function getExperiencesData() {
  const db = firebase.firestore();
  const docRef = db.collection("portfolio").doc("data"); // Assuming known document ID

  try {
    const docSnap = await docRef.get();

    if (docSnap.exists) {
      const heroData = docSnap.data()?.experiencesData;
      return heroData;
    } else {
      console.error("Document does not exist!");
      throw new Error("Document not found");
    }
  } catch (error) {
    console.error("Error retrieving data:", error);
    throw new Error("Failed to fetch Firebase data");
  }
}
export async function getEducationData() {
  const db = firebase.firestore();
  const docRef = db.collection("portfolio").doc("data"); // Assuming known document ID

  try {
    const docSnap = await docRef.get();

    if (docSnap.exists) {
      const heroData = docSnap.data()?.educationData;
      return heroData;
    } else {
      console.error("Document does not exist!");
      throw new Error("Document not found");
    }
  } catch (error) {
    console.error("Error retrieving data:", error);
    throw new Error("Failed to fetch Firebase data");
  }
}
export async function getContactData() {
  const db = firebase.firestore();
  const docRef = db.collection("portfolio").doc("data"); // Assuming known document ID

  try {
    const docSnap = await docRef.get();

    if (docSnap.exists) {
      const heroData = docSnap.data()?.contactData;
      return heroData;
    } else {
      console.error("Document does not exist!");
      throw new Error("Document not found");
    }
  } catch (error) {
    console.error("Error retrieving data:", error);
    throw new Error("Failed to fetch Firebase data");
  }
}
export async function getSectionData() {
  const db = firebase.firestore();
  const docRef = db.collection("portfolio").doc("data"); // Assuming known document ID

  try {
    const docSnap = await docRef.get();

    if (docSnap.exists) {
      const heroData = docSnap.data()?.sectionData;
      return heroData;
    } else {
      console.error("Document does not exist!");
      throw new Error("Document not found");
    }
  } catch (error) {
    console.error("Error retrieving data:", error);
    throw new Error("Failed to fetch Firebase data");
  }
}
export async function getBannerData() {
  const db = firebase.firestore();
  const docRef = db.collection("portfolio").doc("data"); // Assuming known document ID

  try {
    const docSnap = await docRef.get();

    if (docSnap.exists) {
      const heroData = docSnap.data()?.bannerData;
      return heroData;
    } else {
      console.error("Document does not exist!");
      throw new Error("Document not found");
    }
  } catch (error) {
    console.error("Error retrieving data:", error);
    throw new Error("Failed to fetch Firebase data");
  }
}
export async function getProjectsData() {
  const db = firebase.firestore();
  const docRef = db.collection("portfolio").doc("data"); // Assuming known document ID

  try {
    const docSnap = await docRef.get();

    if (docSnap.exists) {
      const heroData = docSnap.data()?.projectsData;
      return heroData;
    } else {
      console.error("Document does not exist!");
      throw new Error("Document not found");
    }
  } catch (error) {
    console.error("Error retrieving data:", error);
    throw new Error("Failed to fetch Firebase data");
  }
}

export async function getProjectById(id: string): Promise<Project> {
  const db = firebase.firestore();
  const docRef = db.collection("portfolio").doc("data"); // Assuming known document ID

  try {
    const docSnap = await docRef.get();

    if (docSnap.exists) {
      const projectsData: Project[] = docSnap.data()?.projectsData;

      // Search for the project with the specified ID
      const project = projectsData.find(proj => proj.id === id);

      if (project) {
        return project;
      } else {
        console.error("Project with ID not found!");
        throw new Error("Project not found");
      }
    } else {
      console.error("Document does not exist!");
      throw new Error("Document not found");
    }
  } catch (error) {
    console.error("Error retrieving data:", error);
    throw new Error("Failed to fetch Firebase data");
  }
}
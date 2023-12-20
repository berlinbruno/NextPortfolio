export default {
  name: "details",
  title: "Details",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "detaileddescription",
      title: "Detailed Description",
      type: "string",
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "mail",
      title: "Mail",
      type: "string",
    },
    {
      name: "dob",
      title: "DoB",
      type: "date",
    },
    {
      name: "graduation",
      title: "Graduation",
      type: "string",
    },
    {
      name: "address",
      title: "Address",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "yearsofexperience",
      title: "Years Of Experience",
      type: "number",
    },
    {
      name: "resume",
      title: "Resume",
      type: "file",
    },
    // education
    {
      name: "education",
      title: "Education",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "institute",
              title: "Institute",
              type: "string",
            },
            {
              name: "qualification",
              title: "Qualification",
              type: "string",
            },
            {
              name: "years",
              title: "Years",
              type: "string",
            },
          ],
        },
      ],
    },
    // experience
    {
      name: "experience",
      title: "Experience",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "company",
              title: "Company",
              type: "string",
            },
            {
              name: "role",
              title: "Role",
              type: "string",
            },
            {
              name: "years",
              title: "Years",
              type: "string",
            },
          ],
        },
      ],
    },
    // skills
    {
      name: "skills",
      title: "Skills",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "frontend",
              title: "Frontend",
              type: "array",
              of: [
                {
                  name: "skill",
                  title: "Skill",
                  type: "string",
                },
              ],
            },
            {
              name: "backend",
              title: "Backend",
              type: "array",
              of: [
                {
                  name: "skill",
                  title: "Skill",
                  type: "string",
                },
              ],
            },
            {
              name: "database",
              title: "Database",
              type: "array",
              of: [
                {
                  name: "skill",
                  title: "Skill",
                  type: "string",
                },
              ],
            },
            {
              name: "others",
              title: "Others",
              type: "array",
              of: [
                {
                  name: "skill",
                  title: "Skill",
                  type: "string",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

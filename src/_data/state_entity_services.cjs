//@ts-check

const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function () {
  let url = "https://api.stateentityprofile.ca.gov/api/Services/Query";

  /* This returns a promise */
  return EleventyFetch(url, {
    fetchOptions: {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify({
        lang: "en",
        name: "",
        agencyTypeIds: [null],
        agencyTagIds: [null],
        page: "0",
        pageSize: 999,
        sortDirection: "Ascending"
      })
    },
    verbose: true,
    duration: "1d", // save for 1 day
    type: "json" // we’ll parse JSON for you
  });
};

/*

{
  "ServiceId": 1152,
  "ServiceName": "Administrative Hearings",
  "ServiceType": "By Mail|In Person|Online Service",
  "AgencyTags": "Family|Government",
  "Description": "Hears administrative disputes through the General Jurisdiction Division, Special Education Division, and Public Works Contract Arbitration Program.",
  "RelatedSearchTerms": "Administrative Hearings",
  "LogoUrl": "logo-216-DGS.png",
  "ImageUrl": "service-1152-Administrative-Hearings.jpg",
  "ServiceUrl": "https://www.dgs.ca.gov/OAH/Services",
  "Featured": null,
  "ContactPhone": "916-263-0550",
  "ContactUrl": "https://www.dgs.ca.gov/OAH/Contact",
  "AgencyName": "General Services, Department of",
  "FriendlyName": "Department of General Services",
  "AgencyId": 216,
  "Acronym": "DGS",
  "Keywords": "administrative, hearings, disputes, special education, school, public works, contract, arbitration",
  "Landing": null,
  "ServiceNameTag": "Administrative Hearings"
},

*/

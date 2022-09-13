// Mounts DownloadRequestFormModal button + modal form into the DOM, probably a better way to do this

import DownloadRequestFormModal from "@/components/codebase/DownloadRequestFormModal.vue";

const el = document.getElementById("download-request-form");
if (el) {
  const userData = JSON.parse(el.getAttribute("data-user-data"));
  const versionNumber = el.getAttribute("data-version-number");
  const identifier = el.getAttribute("data-identifier");
  new DownloadRequestFormModal({
    propsData: {
      identifier,
      versionNumber,
      userAffiliation: userData.institution, // FIXME: does this ever have data?
      userIndustry: userData.industry,
      userEmail: userData.email,
      authenticatedUser: !! userData.email, // for now, if no email in user data, assume not logged in
    },
  }).$mount(el);
}

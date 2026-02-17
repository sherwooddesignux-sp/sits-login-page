$(document).ready(function () {
  /**
   * Get a query string parameter by name
   */
  function getQueryParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
  }

  /* ------------------------------------
   * Accordion auto-open logic
   * ------------------------------------ */
  const emailToCollapseMap = {
    applicant: "#applicant",
    "swansea-ac-uk": "#swansea-ac-uk",
    "swansea-university": "#swansea-university",
    "swansea-online": "#swansea-online",
  };

  const emailParam = getQueryParam("email");

  if (emailParam && emailToCollapseMap[emailParam]) {
    const $collapseEl = $(emailToCollapseMap[emailParam]);

    if ($collapseEl.length) {
      new bootstrap.Collapse($collapseEl[0], { toggle: true });

      // Accessible focus handling
      const $button = $collapseEl
        .prev(".accordion-header")
        .find(".accordion-button");

      if ($button.length) {
        $button.trigger("focus");
      }
    }
  }

  /* ------------------------------------
   * Applicant Agent (CHAINED parameter)
   * Only applies when email=applicant
   * ------------------------------------ */
  const applicantAgentParam = getQueryParam("applicant-agent");

  if (emailParam === "applicant" && applicantAgentParam !== null) {
    const $agentAdvice = $("#agent-advice");

    if ($agentAdvice.length) {
      $agentAdvice.show();
    }
  }
});

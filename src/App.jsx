import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Auth from "@/projects/folk/pages/Auth/Page";
import AuthEmailLogin from "@/projects/folk/pages/AuthEmailLogin/Page";
import AuthEmailSent from "@/projects/folk/pages/AuthEmailSent/Page";
import ContactsShell from "@/projects/folk/pages/ContactsShell/Page";
import SearchContacts from "@/projects/folk/pages/SearchContacts/Page";
import Step1OnboardingWelcome from "@/projects/folk/pages/Step1OnboardingWelcome/Page";
import Step2OnboardingTellAboutYourself from "@/projects/folk/pages/Step2OnboardingTellAboutYourself/Page";
import Step3OnboardingConnectAccounts from "@/projects/folk/pages/Step3OnboardingConnectAccounts/Page";
import Step4OnboardingCapture from "@/projects/folk/pages/Step4OnboardingCapture/Page";
import NotificationsEmptyState from "@/projects/folk/pages/NotificationsEmptyState/Page";
import NotificationsOpen from "@/projects/folk/pages/NotificationsOpen/Page";
import SettingsShell from "@/projects/folk/pages/SettingsShell/Page";
import SettingsProfile from "@/projects/folk/pages/SettingsProfile/Page";
import SettingsNotifications from "@/projects/folk/pages/SettingsNotifications/Page";
import SettingsSessions from "@/projects/folk/pages/SettingsSessions/Page";
import SettingsAPI from "@/projects/folk/pages/SettingsAPI/Page";
import SettingsWorkspace from "@/projects/folk/pages/SettingsWorkspace/Page";
import SettingsMembers from "@/projects/folk/pages/SettingsMembers/Page";
import SettingsSecurity from "@/projects/folk/pages/SettingsSecurity/Page";
import DashboardLeads from "@/projects/folk/pages/DashboardLeads/Page";
import SettingsPlans from "@/projects/folk/pages/SettingsPlans/Page";
import UsersEmptyLight from "@/projects/folk/pages/UsersEmptyLight/Page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/auth/email-login" element={<AuthEmailLogin />} />
        <Route path="/auth/email-sent" element={<AuthEmailSent />} />
        <Route path="/contacts-shell" element={<ContactsShell />} />
        <Route path="/search-contacts" element={<SearchContacts />} />
        <Route path="/dashboard-leads" element={<DashboardLeads />} />
        <Route
          path="/step-1-onboarding-welcome"
          element={<Step1OnboardingWelcome />}
        />
        <Route
          path="/step-2-onboarding-tell-about-yourself"
          element={<Step2OnboardingTellAboutYourself />}
        />
        <Route
          path="/step-3-onboarding-connect-accounts"
          element={<Step3OnboardingConnectAccounts />}
        />
        <Route
          path="/step-4-onboarding-capture"
          element={<Step4OnboardingCapture />}
        />
        <Route
          path="/notifications/empty-state"
          element={<NotificationsEmptyState />}
        />
        <Route path="/notifications/open" element={<NotificationsOpen />} />
        <Route path="/settings-shell" element={<SettingsShell />} />
        <Route path="/settings-profile" element={<SettingsProfile />} />
        <Route
          path="/settings-notifications"
          element={<SettingsNotifications />}
        />
        <Route path="/settings-sessions" element={<SettingsSessions />} />
        <Route path="/settings-api" element={<SettingsAPI />} />
        <Route path="/settings-workspace" element={<SettingsWorkspace />} />
        <Route path="/settings-members" element={<SettingsMembers />} />
        <Route path="/settings-security" element={<SettingsSecurity />} />
        <Route path="/settings-plans" element={<SettingsPlans />} />
        <Route path="/users-empty-light" element={<UsersEmptyLight />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

"use client"

import { Navigation } from "@/components/navigation"
import { SystemSettings } from "@/components/dashboard/admin/system-settings"
import { ProtectedRoute } from "@/components/auth/protected-route"

export default function SystemSettingsPage() {
  return (
    <ProtectedRoute allowedRoles={["admin"]}>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">System Settings</h1>
            <p className="text-gray-600 mt-1">Configure system preferences and platform settings</p>
          </div>
          <SystemSettings />
        </main>
      </div>
    </ProtectedRoute>
  )
}

import { Navigation } from "@/components/navigation"
import { UserManagement } from "@/components/dashboard/admin/user-management"

export default function UserManagementPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
          <p className="text-gray-600 mt-1">Manage students, organizers, and system users</p>
        </div>
        <UserManagement />
      </main>
    </div>
  )
}

"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Settings, Mail, Bell, Shield, Database, Globe } from "lucide-react"
import { useState } from "react"

export function SystemSettings() {
  const [settings, setSettings] = useState({
    siteName: "EventNest",
    siteDescription: "Christ University's premier event management platform",
    adminEmail: "admin@christuniversity.in",
    supportEmail: "support@christuniversity.in",
    enableRegistrations: true,
    enableNotifications: true,
    requireApproval: true,
    maxEventCapacity: 1000,
    registrationDeadline: 24,
    autoApproveVenues: false,
  })

  const handleSave = () => {
    console.log("[v0] Saving system settings:", settings)
    // Save settings logic here
  }

  const handleReset = () => {
    console.log("[v0] Resetting system settings")
    // Reset to defaults logic here
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-600" />
              General Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="siteName">Site Name</Label>
              <Input
                id="siteName"
                value={settings.siteName}
                onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="siteDescription">Site Description</Label>
              <Textarea
                id="siteDescription"
                value={settings.siteDescription}
                onChange={(e) => setSettings({ ...settings, siteDescription: e.target.value })}
                rows={3}
              />
            </div>
            <div>
              <Label htmlFor="maxCapacity">Maximum Event Capacity</Label>
              <Input
                id="maxCapacity"
                type="number"
                value={settings.maxEventCapacity}
                onChange={(e) => setSettings({ ...settings, maxEventCapacity: Number.parseInt(e.target.value) })}
              />
            </div>
            <div>
              <Label htmlFor="deadline">Registration Deadline (hours before event)</Label>
              <Input
                id="deadline"
                type="number"
                value={settings.registrationDeadline}
                onChange={(e) => setSettings({ ...settings, registrationDeadline: Number.parseInt(e.target.value) })}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-600" />
              Email Configuration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="adminEmail">Admin Email</Label>
              <Input
                id="adminEmail"
                type="email"
                value={settings.adminEmail}
                onChange={(e) => setSettings({ ...settings, adminEmail: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="supportEmail">Support Email</Label>
              <Input
                id="supportEmail"
                type="email"
                value={settings.supportEmail}
                onChange={(e) => setSettings({ ...settings, supportEmail: e.target.value })}
              />
            </div>
            <div className="space-y-4 pt-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="emailNotifications">Email Notifications</Label>
                <Switch
                  id="emailNotifications"
                  checked={settings.enableNotifications}
                  onCheckedChange={(checked) => setSettings({ ...settings, enableNotifications: checked })}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-600" />
              Security & Permissions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label>Require Event Approval</Label>
                <p className="text-sm text-gray-600">All events must be approved by admin</p>
              </div>
              <Switch
                checked={settings.requireApproval}
                onCheckedChange={(checked) => setSettings({ ...settings, requireApproval: checked })}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>Auto-approve Venue Bookings</Label>
                <p className="text-sm text-gray-600">Automatically approve venue reservations</p>
              </div>
              <Switch
                checked={settings.autoApproveVenues}
                onCheckedChange={(checked) => setSettings({ ...settings, autoApproveVenues: checked })}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>Enable New Registrations</Label>
                <p className="text-sm text-gray-600">Allow new user registrations</p>
              </div>
              <Switch
                checked={settings.enableRegistrations}
                onCheckedChange={(checked) => setSettings({ ...settings, enableRegistrations: checked })}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="w-5 h-5 text-blue-600" />
              System Maintenance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <Database className="w-4 h-4 mr-2" />
                Backup Database
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <Settings className="w-4 h-4 mr-2" />
                Clear Cache
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start text-yellow-600 hover:text-yellow-700 bg-transparent"
              >
                <Bell className="w-4 h-4 mr-2" />
                Send System Notification
              </Button>
              <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700 bg-transparent">
                <Shield className="w-4 h-4 mr-2" />
                Reset All Settings
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
              Save Settings
            </Button>
            <Button variant="outline" onClick={handleReset} className="bg-transparent">
              Reset to Defaults
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, MapPin, Users, Clock } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export function CreateEventForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    date: "",
    startTime: "",
    endTime: "",
    venue: "",
    capacity: "",
    requirements: "",
    registrationFee: "",
    registrationDeadline: "",
    maxRegistrations: "",
    eligibility: "",
    contactPerson: "",
    contactEmail: "",
    contactPhone: "",
    organization: "",
    additionalNotes: "",
  })

  const handleSaveAsDraft = async () => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log("[v0] Event saved as draft:", formData)
    setIsSubmitting(false)
    router.push("/dashboard/organizer")
  }

  const handleSubmitForApproval = async () => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log("[v0] Event submitted for approval:", formData)
    setIsSubmitting(false)
    router.push("/dashboard/organizer")
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-600" />
            Basic Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="title">Event Title *</Label>
              <Input id="title" placeholder="Enter event title" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="technical">Technical</SelectItem>
                  <SelectItem value="cultural">Cultural</SelectItem>
                  <SelectItem value="sports">Sports</SelectItem>
                  <SelectItem value="academic">Academic</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description *</Label>
            <Textarea id="description" placeholder="Describe your event in detail" rows={4} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="date">Event Date *</Label>
              <Input id="date" type="date" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="start-time">Start Time *</Label>
              <Input id="start-time" type="time" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="end-time">End Time *</Label>
              <Input id="end-time" type="time" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-blue-600" />
            Venue & Capacity
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="venue">Preferred Venue *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select venue" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="main-auditorium">Main Auditorium (500 capacity)</SelectItem>
                  <SelectItem value="lab-complex">Lab Complex (100 capacity)</SelectItem>
                  <SelectItem value="sports-complex">Sports Complex (200 capacity)</SelectItem>
                  <SelectItem value="central-lawn">Central Lawn (1000 capacity)</SelectItem>
                  <SelectItem value="conference-hall">Conference Hall (150 capacity)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="capacity">Expected Capacity *</Label>
              <Input id="capacity" type="number" placeholder="Number of attendees" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="requirements">Special Requirements</Label>
            <Textarea id="requirements" placeholder="Any special equipment, setup, or requirements" rows={3} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-600" />
            Registration & Pricing
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="registration-fee">Registration Fee</Label>
              <Input id="registration-fee" type="number" placeholder="₹0" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="registration-deadline">Registration Deadline *</Label>
              <Input id="registration-deadline" type="date" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="max-registrations">Max Registrations</Label>
              <Input id="max-registrations" type="number" placeholder="Leave empty for no limit" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="eligibility">Eligibility Criteria</Label>
            <Textarea id="eligibility" placeholder="Who can register for this event?" rows={2} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-blue-600" />
            Additional Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="contact-person">Contact Person *</Label>
              <Input id="contact-person" placeholder="Name of contact person" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-email">Contact Email *</Label>
              <Input id="contact-email" type="email" placeholder="contact@example.com" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="contact-phone">Contact Phone</Label>
              <Input id="contact-phone" type="tel" placeholder="+91 XXXXX XXXXX" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="organization">Organizing Committee/Club</Label>
              <Input id="organization" placeholder="Name of organizing body" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="additional-notes">Additional Notes</Label>
            <Textarea id="additional-notes" placeholder="Any other information for the admin team" rows={3} />
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-4 justify-end">
        <Button variant="outline" size="lg" onClick={handleSaveAsDraft} disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "Save as Draft"}
        </Button>
        <Button
          className="bg-blue-600 hover:bg-blue-700"
          size="lg"
          onClick={handleSubmitForApproval}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit for Approval"}
        </Button>
      </div>
    </div>
  )
}
